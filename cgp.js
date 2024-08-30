// Calculate the walking vector based on input and player rotation
function calculateWalkingVector(player, inputMap) {
    // Base speed of the player
    const speed = 0.1;
    
    // Directional vectors based on the player's current rotation
    const forward = new BABYLON.Vector3(
        Math.sin(player.rotation.y), 
        0, 
        Math.cos(player.rotation.y)
    );

    const right = new BABYLON.Vector3(
        Math.sin(player.rotation.y + Math.PI / 2),
        0,
        Math.cos(player.rotation.y + Math.PI / 2)
    );

    // Initialize movement vector
    let movementVector = BABYLON.Vector3.Zero();

    // Apply forward/backward movement
    if (inputMap["ArrowUp"]) {
        movementVector.addInPlace(forward.scale(speed));
    }
    if (inputMap["ArrowDown"]) {
        movementVector.addInPlace(forward.scale(-speed));
    }

    // Apply left/right movement
    if (inputMap["ArrowLeft"]) {
        movementVector.addInPlace(right.scale(-speed));
    }
    if (inputMap["ArrowRight"]) {
        movementVector.addInPlace(right.scale(speed));
    }

    return movementVector;
}

// Scene's render loop
scene.onBeforeRenderObservable.add(() => {
    let movementVector = calculateWalkingVector(player, inputMap);

    // Apply the movement vector to the player
    player.moveWithCollisions(movementVector);
});
