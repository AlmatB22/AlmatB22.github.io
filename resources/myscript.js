var button1 = document.getElementById('work-button-1')
var button2 = document.getElementById('work-button-2')
var button3 = document.getElementById('work-button-3')
document.getElementById('work-2').style.display = 'none'
document.getElementById('work-3').style.display = 'none'


const change_work_1 = function() {
    document.getElementById('work-1').style.display = 'none';
    document.getElementById('work-2').style.display = 'block';
}
const change_work_2 = function() {
    document.getElementById('work-2').style.display = 'none';
    document.getElementById('work-3').style.display = 'block';
}
const change_work_3 = function() {
    document.getElementById('work-3').style.display = 'none';
    document.getElementById('work-1').style.display = 'block';
}
button1.addEventListener('click', change_work_1)
button2.addEventListener('click', change_work_2)
button3.addEventListener('click', change_work_3)