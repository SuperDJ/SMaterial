<template>
    <div class="banner" :class="{ 'banner--single-line': singleLine, 'banner--multi-line': multiLine, 'banner--image-multi-line': multiLineImage}">
        <div class="banner__image" v-if="multiLineImage">
            <slot name="image"></slot>
        </div>

        <div class="banner__content">
            <slot name="content"></slot>
        </div>

        <div class="banner__actions">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            singleLine: {
                type: Boolean,
                required: false,
                default: false,
            },
            multiLine: {
                type: Boolean,
                required: false,
                default: false,
            },
            multiLineImage: {
                type: Boolean,
                required: false,
                default: false,
            },
        },
    }
</script>