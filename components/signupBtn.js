const signupBtnData = [
  {}
];

function signupBtnTemplate(signupBtn) {
    return `
    <div class="hero-btn">
        <a class="btn btn-warning" href="https://forms.gle/qAUQk6n1unWJuqxx8"><i
                class="fas fa-user-plus"></i> আপনার তথ্য যোগ করুন</a>
    </div>
  `;
}

document.getElementById("signupBtn").innerHTML = `
  ${signupBtnData.map(signupBtnTemplate).join("")}  
`;
