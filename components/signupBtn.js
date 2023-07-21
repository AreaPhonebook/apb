const signupBtnData = [
  {}
];

function signupBtnTemplate(signupBtn) {
    return `
    <div class="hero-btn">
        <a class="btn btn-warning" href="https://www.areaphonebook.com/signup"><i
                class="fas fa-user-plus"></i> আপনার তথ্য যোগ করুন</a>
    </div>
  `;
}

document.getElementById("signupBtn").innerHTML = `
  ${signupBtnData.map(signupBtnTemplate).join("")}  
`;
