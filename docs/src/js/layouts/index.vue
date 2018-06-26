<template>
    <div>
        <app-bar :fixed="true">
            <template slot="title">{{ title() }}</template>

            <template slot="actions">
                <m-icon>person</m-icon>                
            </template>
        </app-bar>

        <main class="container">
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
    import AppBar from '../components/AppBar';

    export default {
        metaInfo()
        {
            return {
                title: this.title()
            }
        },
        components: {
            AppBar
        },

        methods: {
            title() {
                return this.$route.meta.title;
            }
        }
    }
</script>