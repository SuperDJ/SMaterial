<template>
    <div>
        <article class="row">
            <section class="xs12">
                <h1 class="xs12 text--red-400">Banners</h1>

                <p>
                    There are a couple of different banners that you can use.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12">Single line</h2>

            <section class="xs12 sm6">
                <p>
                    The default banner consist of text and a action or <router-link :to="{name: 'buttons'}">button</router-link>.
                </p>

                <p>
                    To make a banner you always need to use the base class <code>.banner</code>.
                    For the single line banner you also need to use the additional class <code>.banner__single-line</code>.
                    For the elements within the banner you need to use the classes <code>.banner__single-line__content</code> and 
                    <code>.banner__single-line__actions</code> accordingly.
                </p>

                <p>
                    For desktop a single line banner can also supports mutliple actions
                </p>
            </section>

            <section class="xs12 sm6">
                <banner singleLine>
                    <template slot="content">
                        One line text string with one action
                    </template>

                    <div slot="actions">
                        <m-button text>
                            Action
                        </m-button>

                        <button class="button button__text md-down-hide">
                            Action
                        </button>
                    </div>
                </banner>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12">Multi line</h2>

            <section class="xs12 sm6">
                <p>
                    The multi line banner consists of 2 lines of content and can container multiple actions.
                </p>

                <p>
                    For the multi line banner you need to use the class <code>.banner__multi-line</code>.
                    The content and actions you need to use the same classes as for the single line except it is now <code>multi-line</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <banner multiLine>
                    <div slot="content">
                        Two line text string with two actions. One to two <br>lines is preferable on mobile and tablet.
                    </div>

                    <div slot="actions">
                        <m-button text>
                            Action
                        </m-button>

                        <m-button text>
                            Action
                        </m-button>
                    </div>
                </banner>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12">Image multi line</h2>

            <section class="xs12 sm6">
                <p>
                    Next to the single and multi line there is also an image with multi line banner.
                </p>
            </section>

            <section class="xs12 sm6">
                <banner multiLineImage>
                    <div slot="image">
                        <img src="http://via.placeholder.com/40x40" alt="placeholder">
                    </div>

                    <div slot="content">
                        Two line text string with two actions. One to two <br>lines is preferable on mobile and tablet. 
                    </div>

                    <div slot="actions">
                        <m-button text>
                            Action
                        </m-button>

                        <m-button text>
                            Action
                        </m-button>    
                    </div>
                </banner>
            </section>
        </article>
    </div>    
</template>

<script>
    import Banner from '@/components/Banner';

    export default {
        components: {
            Banner
        }
    }
</script>