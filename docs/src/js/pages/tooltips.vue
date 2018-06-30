<template>
    <div>
        <article class="row">
            <h1 class="xs12 text--red-400">Text fields</h1>

            <section class="xs12 sm6">
                <p>
                    The tooltip can be used to give extra information about something.
                    The tooltip can be used around many other objects.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="filled">Tooltip</h2>

            <section class="xs12 sm6">
                <p>
                    For a tooltip to work you need to wrap an element in a class <code>.tooltip</code>.
                    After the wrapped element you need to use the class 
                    <code>.tooltip__content</code> which will contain the content of the tooltip.
                </p>
            </section>

            <section class="xs12 sm6">
                <div class="tooltip">
                    <m-button contained>Left</m-button>
                    <span class="tooltip__content tooltip--left">Tooltip</span>
                </div>

                <div class="tooltip">
                    <m-button contained>Top</m-button>
                    <span class="tooltip__content tooltip--top">Tooltip</span>
                </div>

                <div class="tooltip">
                    <m-button contained>Right</m-button>
                    <span class="tooltip__content tooltip--right">Tooltip</span>
                </div>

                <div class="tooltip">
                    <m-button contained>Bottom</m-button>
                    <span class="tooltip__content tooltip--bottom">Tooltip</span>
                </div>
            </section> 
        </article>
    </div>    
</template>
