<template>
    <button 
        class="button" 
        :class="{
            'button--contained': contained, 
            'button--contained--icon-left': iconLeft && contained,
            'button--contained--icon-right': iconRight && contained,
            'button--outlined' : outlined, 
            'button--outlined--icon-left': iconLeft && outlined,
            'button--outlined--icon-right': iconRight && outlined,
            'button--text': text,
            'button--text--icon-left': iconLeft && text,
            'button--text--icon-right': iconRight && text,
        }"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: {
            contained: {
                type: Boolean,
                required: false,
                default: false,
            },
            outlined: {
                type: Boolean,
                required: false,
                default: false,
            },
            text: {
                type: Boolean,
                required: false,
                default: false,
            },
            iconLeft: {
                type: Boolean,
                required: false,
                default: false,
            },
            iconRight: {
                type: Boolean,
                required: false,
                default: false,
            },
        }
    }
</script>