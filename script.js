// ===============================
// DARK / LIGHT MODE
// ===============================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            themeBtn.textContent = "☀️ Light Mode";

        } else {

            themeBtn.textContent = "🌙 Dark Mode";

        }

    });

}


// ===============================
// ADD PROJECT
// ===============================

const addProjectBtn = document.querySelector(".add-btn");

if (addProjectBtn) {

    addProjectBtn.addEventListener("click", function () {

        const projectName = prompt("Enter project name:");

        if (projectName && projectName.trim() !== "") {

            alert(
                "Project '" + projectName + "' added successfully! ✅"
            );

        }

    });

}


// ===============================
// ADD TEAM MEMBER
// ===============================

const addMemberBtn = document.getElementById("addMemberBtn");

if (addMemberBtn) {

    addMemberBtn.addEventListener("click", function () {

        const memberName = prompt("Enter member name:");

        if (!memberName || memberName.trim() === "") {
            return;
        }

        const memberRole = prompt("Enter member role:");

        if (!memberRole || memberRole.trim() === "") {
            return;
        }

        alert(
            memberName + " has been added as " + memberRole + "! ✅"
        );

    });

}


// ===============================
// API INTEGRATION - TEAM MEMBERS
// ===============================

const teamTable = document.querySelector(".team-table");

async function loadTeamMembers() {

    if (!teamTable) {
        return;
    }

    try {

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        const members = users.slice(0, 5);

        members.forEach(function (user) {

            const row = document.createElement("div");

            row.className = "team-row";

            row.innerHTML = `
                <span>👤 ${user.name}</span>
                <span>Team Member</span>
                <span>${user.email}</span>
                <span class="member-status active-status">
                    Active
                </span>
            `;

            teamTable.appendChild(row);

        });

    } catch (error) {

        console.log("Unable to load team members:", error);

    }

}

loadTeamMembers();


// ===============================
// SAVE PROFILE SETTINGS
// ===============================

const saveProfileBtn = document.getElementById("saveProfileBtn");

if (saveProfileBtn) {

    saveProfileBtn.addEventListener("click", function () {

        const nameInput = document.getElementById("userName");
        const emailInput = document.getElementById("userEmail");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (name === "" || email === "") {

            alert("Please enter your name and email.");

            return;

        }

        localStorage.setItem("userName", name);
        localStorage.setItem("userEmail", email);

        alert("Profile changes saved successfully! ✅");

    });

}