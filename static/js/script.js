window.onscroll = function(e) {
    // Going down
    if (this.scrollY > this.oldScroll) {
        this.goingUp = this.scrollY;
    } else {
        this.goingDown = this.scrollY;
    }

    // Make sure there is a delay for the menu to show up 
    // so that it's not constantly switching
    if ((this.goingUp - this.scrollY) > 100) {
        document.body.classList.add('show-menu');
    } else if ((this.scrollY - this.goingDown) > 100) {
        document.body.classList.remove('show-menu');
    }
    this.oldScroll = this.scrollY;
}