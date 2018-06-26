<template>
    <button 
        class="button" 
        :class="{
            'button__contained': contained, 
            'button__contained--icon-left': iconLeft && contained,
            'button__contained--icon-right': iconRight && contained,
            'button__outlined' : outlined, 
            'button__outlined--icon-left': iconLeft && outlined,
            'button__outlined--icon-right': iconRight && outlined,
            'button__text': text,
            'button__text--icon-left': iconLeft && text,
            'button__text--icon-right': iconRight && text,
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