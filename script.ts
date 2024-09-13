// listing elements
document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    // type assertion

    const profilePictureInput = document.getElementById(
      "profilePicture"
    ) as HTMLInputElement;

    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;

    const educationElement = document.getElementById(
      "education"
    ) as HTMLTextAreaElement;
    const experienceElement = document.getElementById(
      "experience"
    ) as HTMLTextAreaElement;
    const skillsElement = document.getElementById(
      "skills"
    ) as HTMLTextAreaElement;
    //**
    const usernameElement = document.getElementById(
      "username"
    ) as HTMLInputElement;

    if (
      profilePictureInput &&
      nameElement &&
      emailElement &&
      phoneElement &&
      educationElement &&
      experienceElement &&
      skillsElement
    ) {
      //**
      //******************************** */
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      //**
    //   const username = usernameElement.value;
    //   const uniquePath = `resumes/${username.replace(/\s+/g, "_")}_cv.html`;

      //******************************** */

      // picture elements
      const profilePictureFile = profilePictureInput.files?.[0];
      const profilePictureURL = profilePictureFile
        ? URL.createObjectURL(profilePictureFile)
        : "";

      // create resume output
      const resumeOutput = `
    <h2>Resume</h2>
    ${
      profilePictureURL
        ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">`
        : ""
    }
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Phone Number:</strong> ${phone} </p>


    <h3> Education </h3>
    <p> ${education} </p>

    <h3> Experience </h3>
    <p> ${experience} </p>

    <h3> Skills </h3>
    <p> ${skills} </p>
`;
      //**
    //   const downloadLink = document.createElement("a");
    //   downloadLink.href =
    //     "data: text/html: charset= utf-8," + encodeURIComponent(resumeOutput);
    //   downloadLink.download = uniquePath;
    //   downloadLink.textContent = "Download Your 2024 Resume";

     //******************************** */
     // Display the name in the output container
      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
        resumeOutputElement.innerHTML = resumeOutput;
        resumeOutputElement.classList.remove("hidden");

      // Create containers for button
      const buttonsContainer = document.createElement("div");
      buttonsContainer.id = "buttonsContainer";
      resumeOutputElement.appendChild(buttonsContainer);

      // Add Download PDF button
      const downloadButton = document.createElement("button");
      downloadButton.textContent = "Download As PDF";
      downloadButton.addEventListener("click", () => {
        window.print(); // Open the print dialog, allowing the user to save as the PDF.
      });
      buttonsContainer.appendChild(downloadButton);

      // Add shareable link button
      const shareLinkButton = document.createElement("button");
      shareLinkButton.textContent = "Copy Shareable Link";
      shareLinkButton.addEventListener("click", async () => {
        try {
            // Create a unique shareable link (simulate it in this case)
            const shareableLink = `https://yourdomain.com/resumes/${name.replace(
                /\s+/g,
                "_"
            )}_cv.html`;

            // Use clipboard API to copy the shareable link
            await navigator.clipboard.writeText(shareableLink);
            alert("Shareable link copied to clipboard!");
        } catch(err) {
            console.error("Failed to copy link: ", err);
            alert("Failed to copy link to clipboard. Please try again.");
            
        }
      });
      buttonsContainer.appendChild(shareLinkButton);
    } else {
        console.error("Resume output container not found")
    }
} else {
    console.error("Form elements are missing");
}
        //**
        // resumeOutputElement.appendChild(downloadLink);

        // resumeOutputElement.style.display = "block";
      
      // else{
      // console.error('The Resume Output elements are missing.');

      // }
    // } else {
    //   console.error("One or more Output elements are missing.");
    // }
  });
