function Color() {
    let slider = document.getElementById('slider-price')
    var x = slider.value
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%)' + x + '%, rgb(214,214,214)' + x + '%)';
    slider.style.background = color


    let checkbox = document.getElementById('switch-flat')
    let monthYearText = document.getElementsByClassName('price-month-year')
    let spacePageViews = document.getElementById('page-views-value')
    let valueSpace = document.getElementsByClassName('price-month-year-value')
    var pageviews = x * 10
    var valueMonth = pageviews * 0.16

    if (checkbox.checked) { //Annual Value
        valueMonth = (valueMonth * 12) * 0.75
        monthYearText[0].innerHTML = '/ year'
        monthYearText[1].innerHTML = '/ year'
    } else {
        monthYearText[0].innerHTML = '/ month'
        monthYearText[1].innerHTML = '/ month'
    }
    if (pageviews == 1000) {
        spacePageViews.innerHTML = pageviews - 999 + "M"
        valueSpace[0].innerHTML = '$' + valueMonth.toFixed(1)
        valueSpace[1].innerHTML = '$' + valueMonth.toFixed(1)
    } else {
        spacePageViews.innerHTML = pageviews + "K"
        valueSpace[0].innerHTML = '$' + valueMonth.toFixed(1)
        valueSpace[1].innerHTML = '$' + valueMonth.toFixed(1)

    }




}