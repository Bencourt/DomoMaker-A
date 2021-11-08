const handleDomo = (e) => {
    e.preventDefault();

    $("#domoMessage").animate({width:'hide'},350);

    if($("#domoName").val() == '' || $("#domoAge").val() == '') {
        handleError("Rawr: all fields are required");
        return false;
    }

    sendAjax('POST', $("#domoForm").attr("action"), $("#domoForm").serialize(), function() {
        loadDomosFromServer();
    });

    return false;
};

const DomoForm = (props) => {
    return(
        <form id="domoForm"
        onSubmit={handleDomo}
        name="domoForm"
        action="/maker"
        method="POST"
        className = "domoForm"
        >
            <label htmlFor="name">Name: </label>
            <input id="domoName" type="text" name="name" placeholder ="domoname"/>
            <input type="hidden"></input>
        </form>
    )
}