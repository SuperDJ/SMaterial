<template>
    <div>
        <article class="row">
            <section class="xs12">
                <p>
                    There are 3 types of buttons you can choose from which are: <a href="#contained">contained</a>, <a href="#outlined">outline</a> and <a href="#text">text</a>.
                </p>

                <p>
                    Eacht button uses the <code>.button</code> class but from there they are different.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="text">Text buttons</h2>

            <section class="xs12 sm6">
                <p>
                    A text button can simply be made by using the following class <code>.button__text</code>.
                    If you would also like to add an icon, it is also needs the class <code>.button__text--icon-left</code> or <code>.button__text--icon-right</code>.
                    This depends on where you would like to position the icon.
                </p>
            </section>

            <section class="xs12 sm6">
                <m-button text>Send</m-button>

                <m-button text disabled>Send</m-button>

                <m-button text iconLeft>
                    <m-icon>send</m-icon>
                    Send
                </m-button>

                <m-button text iconRight>
                    Send
                    <m-icon>send</m-icon>
                </m-button>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="contained">Contained buttons</h2>

            <section class="xs12 sm6">
                <p>
                    A contained button can simply be made by using the following class <code>.button__contained</code>.
                    If you would also like to add an icon, it is also needs the class <code>.button__contained--icon-left</code> or <code>.button__contained--icon-right</code>.
                    This depends on where you would like to position the icon.
                </p>
            </section>

            <section class="xs12 sm6">
                <m-button contained>Send</m-button>

                <m-button contained disabled>Send</m-button>

                <m-button contained iconLeft>
                    <m-icon>send</m-icon>
                    Send
                </m-button>

                <m-button contained iconRight>
                    Send
                    <m-icon>send</m-icon>
                </m-button>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12">Outlined button</h2>

            <section class="xs12 sm6">
                <p>
                    The outlined button uses and has the same classes except with <code>outlined</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <m-button outlined>Send</m-button>

                <m-button outlined disabled>Send</m-button>

                <m-button outlined iconLeft>
                    <m-icon>send</m-icon>
                    Send
                </m-button>

                <m-button outlined iconRight>
                    Send
                    <m-icon>send</m-icon>
                </m-button>
            </section>
        </article>
    </div>
</template>