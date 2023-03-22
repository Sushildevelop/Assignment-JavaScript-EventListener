let var1 = document.createElement("h1")
var1.innerText = "I am body Of the Html"

// document.body.appendChild(var1)

let par = document.getElementById("btn")

par.addEventListener("dblclick", function() {
    let image = document.getElementById("Image")
    image.src = "/eventListener/img/shivjii.jpg";
    let para = document.getElementById("Krish")
    para.innerText = "शंकर या महादेव आरण्य संस्कृति जो आगे चल कर सनातन शिव धर्म नाम से जाने जाते है में सबसे महत्वपूर्ण देवताओं में से एक है।[1] वह त्रिदेवों में एक देव हैं। इन्हें देवों के देव महादेव भी कहते हैं। इन्हें भोलेनाथ, शंकर, महेश, रुद्र, नीलकंठ, गंगाधार आदि नामों से भी जाना जाता है। तंत्र साधना में इन्हे भैरव के नाम से भी जाना जाता है।[2] हिन्दू शिव घर्म शिव-धर्म के प्रमुख देवताओं में से हैं। वेद में इनका नाम रुद्र है। यह व्यक्ति की चेतना के अन्तर्यामी हैं। इनकी अर्धांगिनी (शक्ति) का नाम पार्वती है। इनके पुत्र कार्तिकेय , अय्यपा और गणेश हैं, तथा पुत्रियां अशोक सुंदरी , ज्योति और मनसा देवी हैं।"
    para.style.color = "red"
})

// image.src = "shivjii.jpg"