
// localStorage.clear();

function resetSessionStorage() {
    sessionStorage.clear();
}

function like(blogNumber) {
    var toggleImage = document.getElementById('likes' + blogNumber);
    var likeCount = parseInt(localStorage.getItem('likeCount' + blogNumber)) || 0;
    var sessionLikedKey = 'sessionLiked' + blogNumber;
    var isLiked = sessionStorage.getItem(sessionLikedKey) === 'true';

    if (!isLiked) {
        toggleImage.src = 'images/like.png';
        likeCount++;
    } else {
        toggleImage.src = 'images/unlike.png';
        likeCount--;
    }

    isLiked = !isLiked;
    localStorage.setItem('likeCount' + blogNumber, likeCount);
    sessionStorage.setItem(sessionLikedKey, isLiked);
    updateLikeCount(blogNumber, likeCount);
}

function updateLikeCount(blogNumber, count) {
    var likeCountElement = document.getElementById('likeCount' + blogNumber);
    if (likeCountElement) {
        likeCountElement.textContent = count;
    } else {
        console.error('Like count for Blog ' + blogNumber + ' not found');
    }
}

function loadLikeStatus(blogNumber) {
    var likeCount = parseInt(localStorage.getItem('likeCount' + blogNumber)) || 0;
    var sessionLikedKey = 'sessionLiked' + blogNumber;
    var isLiked = sessionStorage.getItem(sessionLikedKey) === 'true';

    updateLikeCount(blogNumber, likeCount);

    var toggleImage = document.getElementById('likes' + blogNumber);
    if (toggleImage) {
        toggleImage.src = isLiked ? 'images/like.png' : 'images/unlike.png';
    } else {
        console.error('Like button for Blog ' + blogNumber + ' not found');
    }
}

resetSessionStorage();
loadLikeStatus(1);
loadLikeStatus(2);

function darklight() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var modeImage = document.getElementById("buttonimage");
    var isDarkMode = element.classList.contains("dark-mode");
    modeImage.src = isDarkMode ? "images/forlight.png" : "images/fordark.png";
}

function openWebsite(url) {
    window.open(url, '_blank');
}

var h1Element, imageElement, paragraphElement;

function batman() {
    var text = "I'm Joshita!";
    var newText = "actually Batman";
    var speed = 100; 
    h1Element = document.querySelector('h1');
    var i = text.length;
    var deleteInterval = setInterval(function() {
        if (i >= 4) {
            h1Element.textContent = text.substring(0, i);
            i--;
        } else {
            clearInterval(deleteInterval);
            var currentText = h1Element.textContent.trim(); 
            currentText += " ";
            var j = 0;
            var typeInterval = setInterval(function() {
                if (j <= newText.length) {
                    h1Element.textContent = currentText + newText.substring(0, j);
                    j++;
                } else {
                    clearInterval(typeInterval);
                    imageElement = document.querySelector('.mypicture');
                    imageElement.src = "images/batmanpicture.jpeg";

                    var ishowspeed = 10; 
                    var newpara = "Thursday, October 31st. The city streets are crowded for the holiday. Even with the rain. Hidden in the chaos is the element, waiting to strike like snakes. And I'm there too. Watching. 2 years of nights have turned me into a nocturnal animal. I must choose my targets carefully. It's a big city. I can't be everywhere. But they don't know where I am. We have a signal now, for when I'm needed. When that light hits the sky, it's not just a call- it's a warning. To them. Fear is a tool. They think I'm hiding in the shadows. But I AM the shadows. I wish I could say I'm making a difference, but I don't know. Murder, robberies, assault- 2 years later, they're all up. And now this. This city's eating itself. Maybe it can't be saved, but i have to try. PUSH MYSELF. These nights all roll together in a rush, Behind the mask. Sometimes in the morning i have to force myself to remember everything that happened.";
                    paragraphElement = document.querySelector('.intro'); 
                    var currentpara = paragraphElement.textContent.trim();
                    var k = currentpara.length;
                    var deleteParaInterval = setInterval(function() {
                        if (k >= 0) {
                            paragraphElement.textContent = currentpara.substring(0, k);
                            k--;
                        } else {
                            clearInterval(deleteParaInterval);
                            var l = 0;
                            var typeParaInterval = setInterval(function() {
                                if (l <= newpara.length) {
                                    paragraphElement.textContent = newpara.substring(0, l);
                                    l++;
                                } else {
                                    clearInterval(typeParaInterval);
                                    setTimeout(function() {
                                        h1Element.textContent = "I'm Joshita!";
                                        var originalImagePath = "images/apictureofme.jpg"; 
                                        imageElement.src = originalImagePath;
                                        paragraphElement.textContent = currentpara;
                                    }, 2000);
                                }
                            }, ishowspeed);
                        }
                    }, ishowspeed);
                }
            }, speed);
        }
    }, speed);
}
