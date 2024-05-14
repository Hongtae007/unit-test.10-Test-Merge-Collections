function merge(collection1, collection2, collection3) {
    let merged = [];
    let i = 0, j = 0, k = 0;

    // Merge until any of the arrays is exhausted
    while (i < collection1.length || j < collection2.length || k < collection3.length) {
        if (i < collection1.length && (j >= collection2.length || collection1[i] <= collection2[j]) && (k >= collection3.length || collection1[i] <= collection3[k])) {
            merged.push(collection1[i]);
            i++;
        } else if (j < collection2.length && (i >= collection1.length || collection2[j] <= collection1[i]) && (k >= collection3.length || collection2[j] <= collection3[k])) {
            merged.push(collection2[j]);
            j++;
        } else {
            merged.push(collection3[k]);
            k++;
        }
    }

    return merged;
}

function mergeCollections() {
    const collection1Input = document.getElementById("collection1").value.trim();
    const collection2Input = document.getElementById("collection2").value.trim();
    const collection3Input = document.getElementById("collection3").value.trim();

    const collection1 = collection1Input.split(",").map(Number);
    const collection2 = collection2Input.split(",").map(Number);
    const collection3 = collection3Input.split(",").map(Number);

    // Validate input format (comma-separated numbers)
    const regex = /^(\d+\s*,\s*)*\d+$/;
    if (!regex.test(collection1Input) || !regex.test(collection2Input) || !regex.test(collection3Input)) {
        alert("Invalid input format. Please enter comma-separated numbers.");
        return;
    }
    
    // Reverse collection3
    collection3.reverse();

    const merged = merge(collection1, collection2, collection3);
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = "Merged Collection: " + merged.join(", ");
}