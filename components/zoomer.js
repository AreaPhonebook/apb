const zoomerData = [
  {}
];

function zoomerTemplate(zoomer) {
    return `
    <div class="modal fade" id="imagemodal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <button type="button" class="close" data-dismiss="modal"><span
                    aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <img src="" class="imagepreview" style="width: 100%;">
        </div>
    </div>
</div>

  `;
}

document.getElementById("zoomer").innerHTML = `
  ${zoomerData.map(zoomerTemplate).join("")}  
`;