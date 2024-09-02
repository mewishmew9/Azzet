function calculateMaxCameraDistance(subject, camera, physicsWorld, maxDistance) {
    // Get the subject's position
    var subjectPosition = subject.position;

    // Get the camera's forward direction (local z-axis)
    var forward = camera.getForwardRay().direction;

    // Calculate the end point of the raycast (at maxDistance along the camera's local z-axis)
    var endPosition = subjectPosition.add(forward.scale(maxDistance));

    // Create Ammo.js vectors
    var from = new Ammo.btVector3(subjectPosition.x, subjectPosition.y, subjectPosition.z);
    var to = new Ammo.btVector3(endPosition.x, endPosition.y, endPosition.z);

    // Set up the raycast callback
    var rayCallback = new Ammo.ClosestRayResultCallback(from, to);

    // Perform the raycast
    physicsWorld.rayTest(from, to, rayCallback);

    // Initialize the result
    var actualDistance = maxDistance;

    // Check if there was a hit
    if (rayCallback.hasHit()) {
        // Calculate the distance from the subject to the hit point
        var hitPointWorld = rayCallback.get_m_hitPointWorld();
        var hitPoint = new BABYLON.Vector3(hitPointWorld.x(), hitPointWorld.y(), hitPointWorld.z());
        actualDistance = BABYLON.Vector3.Distance(subjectPosition, hitPoint);

        console.log("Ray hit an object at distance:", actualDistance);
    } else {
        console.log("No obstacles detected within max distance.");
    }

    // Clean up Ammo.js objects
    Ammo.destroy(from);
    Ammo.destroy(to);
    Ammo.destroy(rayCallback);

    return actualDistance; // Return the maximum distance the camera can be without hitting an obstacle
}
