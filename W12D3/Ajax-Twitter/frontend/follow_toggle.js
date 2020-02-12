class FollowToggle {
    constructor (el, options) {
        this.$el = $(el);
        this.userId = this.$el.data('user_id' || options.userId);
        this.followState = this.$el.data('initial-follow-state' || options.followState);
        this.render();
        debugger;
        this.$el.on('click', this.handleClick.bind(this));
    }

    render(){
        switch (this.followState){
            case 'followed':
                this.$el.html('Unfollow!');
                break;
            case 'unfollowed':
                this.$el.html('Follow!');
                break;
            
        }
    }

    handleClick(e){

        e.preventDefault();
        
        const CallMthd = "POST";
        if (this.followState === 'followed'){
            this.followState = 'unfollowed';
            CallMthd = "DELETE";   
        } else if (this.followState === 'unfollowed'){
            this.followState = 'followed';
        }
        debugger;
        $.ajax({
            method: CallMthd,
            url: '/users/:id/follow',
            dataType: JSON,
            success(message){
                console.log(message);
            },
            error() {
                debugger;
                console.log(error);
            }
        })
    }
}
module.exports = FollowToggle;