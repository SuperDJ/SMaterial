<template>
    <div>
        <app-bar :fixed="true">
            <template slot="title">{{ title() }}</template>

            <template slot="actions">
                <m-icon>person</m-icon>                
            </template>
        </app-bar>

        

        <main class="container">
            <div class="row">
                <h1 class="xs12 h1">{{ title() }}</h1>
            </div>
            <router-view></router-view>
        </main>

        <nav class="drawer" id="drawer">
            <ul class="drawer__menu">
                <li v-for="(item, i) in menu" :key="i">
                    <router-link 
                        class="drawer__item"
                        exact
                        active-class="drawer__item--active" 
                        :to="{ name: item.to }"
                        v-if="!item.children"
                    >
                        <m-icon class="drawer__item__icon" v-if="item.icon">{{ item.icon }}</m-icon>
                        <span class="drawer__item__content">{{ item.title }}</span>
                    </router-link>

                    <div class="drawer__item drawer__item--parent" v-else>
                        <m-icon class="drawer__item__icon" v-if="item.icon">{{ item.icon }}</m-icon>
                        <span class="drawer__item__content">{{ item.title }}</span>
                    </div>

                    <ul v-if="item.children" class="drawer__item__children">
                        <li v-for="(child, i) in item.children" :key="i">
                            <router-link 
                                class="drawer__item"
                                exact
                                active-class="drawer__item--active" 
                                :to="{ name: child.to }"
                                v-if="!child.children"
                            >
                                <m-icon class="drawer__item__icon" v-if="child.icon">{{ child.icon }}</m-icon>
                                <span class="drawer__item__content">{{ child.title }}</span>
                            </router-link>
                            
                            <div class="drawer__item drawer__item--parent" v-else>
                                <m-icon class="drawer__item__icon" v-if="child.icon">{{ child.icon }}</m-icon>
                                <span class="drawer__item__content">{{ child.title }}</span>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
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

        data: () => {
            return {
                menu: [
                    {
                        to: 'index',
                        title: 'Introduction',
                    },
                    {
                        title: 'Components',
                        children: [
                            {
                                to: 'app-bar',
                                title: 'App bar'
                            },
                            {
                                to: 'banners',
                                title: 'Banners',
                            },
                            {
                                to: 'bottom-nav',
                                title: 'Bottom navigation'
                            },
                            {
                                to: 'bottom-sheet',
                                title: 'Bottom sheets',
                            },
                            {
                                to: 'buttons',
                                title: 'Buttons',
                            },
                            {
                                to: 'fab',
                                title: 'Buttons: FAB',
                            },
                            {
                                to: 'cards',
                                title: 'Cards',
                            },
                            {
                                to: 'chips',
                                title: 'Chips',
                            },
                            {
                                to: 'tables',
                                title: 'Data tables'
                            },
                            {
                                to: 'lists',
                                title: 'Lists',
                            },
                            {
                                to: 'menus',
                                title: 'Menus',
                            },
                            {
                                to: 'progress',
                                title: 'Progress indicators',
                            },
                            {
                                to: 'selection',
                                title: 'Selection controls',
                            },
                            {
                                to: 'snackbars',
                                title: 'Snackbars',
                            },
                            {
                                to: 'tabs',
                                title: 'Tabs'
                            },
                            {
                                to: 'text-fields',
                                title: 'Text fields',
                            },
                            {
                                to: 'tooltips',
                                title: 'Tooltips',
                            },
                        ]
                    },
                    {
                        to: 'typography',
                        title: 'Typography',
                    },
                ]
            }
        },

        methods: {
            title() {
                return this.$route.meta.title;
            }
        }
    }
</script>