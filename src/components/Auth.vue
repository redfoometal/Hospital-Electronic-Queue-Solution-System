<template>
    <div class="modal" v-click-outside="onClick">
        <form class="modal-content animate" action="/action_page.php">
            <div class="imgcontainer">
                <span class="close" title="Close Modal" @click="onClick">×</span>
                <img src="../assets/avatar.png" alt="Avatar" class="avatar">
            </div>
            <div class="container">
                <label for="uname"><b>Email</b></label>
                <input type="email" placeholder="Введите Email" name="uname" required>
                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required>
                <button type="submit">Login</button>
            </div>

            <div class="container" style="background-color:#f1f1f1">
                <button type="button" class="cancelbtn" @click="onClick">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
import vClickOutside from 'click-outside-vue3'
import { mapActions } from 'vuex'
export default {
    name: 'Auth',
    methods:{
        ...mapActions([
            'TOGGLE_AUTH_VISIBLE'
        ]),
        onClick(){
            this.TOGGLE_AUTH_VISIBLE(false);
        }
    },
    directives: {
        clickOutside: vClickOutside.directive
    },
    }
</script>

<style scoped>
/* Full-width input fields */
input[type=email], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

/* Set a style for all buttons */
button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
}

button:hover {
    opacity: 0.8;
}

/* Extra styles for the cancel button */
.cancelbtn {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
}

/* Center the image and position the close button */
.imgcontainer {
    text-align: center;
    margin: 24px 0 12px 0;
    position: relative;
}

img.avatar {
    width: 40%;
    border-radius: 50%;
}

.container {
    padding: 16px;
}

span.psw {
    float: right;
    padding-top: 16px;
}

/* The Modal (background) */
.modal {
    left: 30%;
    right: 30%;
    width: 40%; /* Could be more or less, depending on screen size */
    position: fixed; /* Stay in place */
}

/* Modal Content/Box */
.modal-content {
    background-color: #fefefe;
    border: 1px solid #888;
    margin-top: 10px;
    z-index: 2; /* Sit on top */
}

/* The Close Button (x) */
.close {
    position: absolute;
    right: 25px;
    top: 0;
    color: #000;
    font-size: 35px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: red;
    cursor: pointer;
}

/* Add Zoom Animation */
.animate {
    -webkit-animation: animatezoom 0.6s;
    animation: animatezoom 0.6s
}

@-webkit-keyframes animatezoom {
    from {-webkit-transform: scale(0)} 
    to {-webkit-transform: scale(1)}
}
    
@keyframes animatezoom {
    from {transform: scale(0)} 
    to {transform: scale(1)}
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
    span.psw {
       display: block;
       float: none;
    }
    .cancelbtn {
       width: 100%;
    }
}
</style>