document.querySelectorAll('[data-like]').forEach(button => {
    const data = button.dataset;
    let count = +data.likeCount; // +strng <=> 0 + Number(string)
    //let count = Number(data.likeCount);
    let isLiked = 'likeIsLiked' in data;
    const wrapper = button.querySelector('.like__count');

    button.onclick = function (e) {
        if (!isLiked){
            button.classList.add('like_liked');
            count += 1;
        } else {
            button.classList.remove('like_liked');
            count -= 1;
        }
        isLiked = !isLiked;
        wrapper.innerHTML = count.toString();
    }
})

































/*
        const liked = e.target.closest('[data-like]').classList.toggle('like_liked');
        let count = 10;

        if (liked) {
            count += 1;
        } else {
            count;
        }
        button.querySelector('like__count').innerHTML = count.toString();
*/