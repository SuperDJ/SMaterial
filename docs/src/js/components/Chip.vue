<template>
    <div 
        class="chip"
        :class="{
            'chip--outlined': outlined, 
            'chip--thumbnail': thumbnail,
            'chip--remove': remove
        }"
    >
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            outlined: {
                type: Boolean,
                required: false,
                default: false,
            },
            thumbnail: {
                type: Boolean,
                required: false,
                default: false,
            },
            remove: {
                type: Boolean,
                required: false,
                default: false,
            },
        }
    }
</script>