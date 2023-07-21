const comingSoonsData = [
    {}
];


function comingSoonTemplate(comingSoon) {
    return `
    <div class="col-md-12 text-center">
        <img src="resources/imoji/cry.gif" alt="Cry Imoji" class="img-fluid">
        <br><br>
        <blockquote class="blockquote text-center">
            <p class="mb-0">আমরা আন্তরিক ভাবে দুঃখিত, এখনো আমরা এখানে কোনো তথ্য যোগকরতে পারিনি</p>
            <p class="blockquote-footer">আমরা এই ক্যাটাগরি নিয়ে কাজ করছি, আশাকরি খুব তাড়াতাড়ি এই
                ক্যাটাগরি তে তথ্য দেখতে পাবেন.</cite></p>
        </blockquote>
        <br>
        <p>[আপনিও চাইলে <a href="#" class="active btn btn-outline-warning"><i class="fas fa-user-plus"></i> তথ্য যোগ</a> করতে পারেন]</p>
        <p>আপনার ধৈর্যের প্রশংসা করি, ধৈর্য রাখার জন্য আপনাকে ধন্যবাদ!</p>
        <br><br>
    </div>
    `;
}


document.getElementById("comingSoon").innerHTML = `
    ${comingSoonsData.map(comingSoonTemplate).join("")}
  `;


