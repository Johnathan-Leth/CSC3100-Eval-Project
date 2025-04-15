$('#frmSurvey').slideUp('slow', () => {
    $('#frmDashboard').slideDown('slow')
    /* This script belong to chihuahuaspin.com and I take NO ownership of it. 
    Again this code belongs to chihuahuaspin.com and I do NOT claim to own it.*/    
    let spins = 0
    setInterval(function () {
        spins++
        $('#spin').text(spins + " spin" + (spins != 1 ? "s" : ""))
        if (spins == 10)
        $("#ethan").show()
        else if (spins == 17)
        $("#ethan").hide()
    }, 4205)
    // hearts to Ethan, Neal, and Shawn
})