// First, store the original CreateBox method
const originalCreateBox = BABYLON.MeshBuilder.CreateBox;

// Create a wrapper function
BABYLON.MeshBuilder.CreateBox = function(name, options, scene) {
    // Call the original CreateBox method
    const box = originalCreateBox(name, options, scene);

    // Add custom logic here
    // Create a default material (if not already assigned)
    if (!box.material) {
        const defaultMaterial = new BABYLON.StandardMaterial("defaultMaterial", scene);
        defaultMaterial.diffuseColor = new BABYLON.Color3(1, 0, 0); // Example: red color
        box.material = defaultMaterial;
    }

    // Run any other custom code here
    console.log(`Box created with name: ${name}`);

    // Return the box
    return box;
};

// Example usage:
const box = BABYLON.MeshBuilder.CreateBox("myBox", { size: 2 }, scene);
