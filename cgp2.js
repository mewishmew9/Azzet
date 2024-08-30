// Calculate the walking vector and the target Y rotation based on input and player rotation
function calculateMovement(player, inputMap) {
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

    // Calculate the direction the character should face
    let targetRotationY = player.rotation.y;
    if (!movementVector.equals(BABYLON.Vector3.Zero())) {
        // Calculate the angle between the forward vector and the movement vector
        targetRotationY = Math.atan2(movementVector.x, movementVector.z);
    }

    return {
        movementVector,
        targetRotationY
    };
}

// Scene's render loop
scene.onBeforeRenderObservable.add(() => {
    const { movementVector, targetRotationY } = calculateMovement(player, inputMap);

    // Apply the movement vector to the player
    player.moveWithCollisions(movementVector);

    // Smoothly rotate the player towards the target direction
    player.rotation.y = BABYLON.Scalar.LerpAngle(player.rotation.y, targetRotationY, 0.1);
});
