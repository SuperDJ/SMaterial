<template>
    <header class="app-bar" :class="{ 'app-bar--fixed' : fixed }">
        <m-icon data-trigger="drawer">menu</m-icon>

        <div class="app-bar__title">
            <slot name="title"></slot>
        </div>

        <div class="app-bar__actions">
            <slot name="actions"></slot>    
        </div>
    </header>
</template>

<script>
    export default {
        props: {
            fixed: {
                type: Boolean,
                required: false,
                default: false,
            }
        }
    }
</script>