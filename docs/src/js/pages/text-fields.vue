<template>
    <div>
        <article class="row">
            <h1 class="xs12 text--red-400">Text fields</h1>

            <section class="xs12 sm6">
                <p>
                    The text field comes in two varieties
                    <a href="#filled">filled</a> and <a href="#outlined">outlined</a>.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="filled">Filled text field</h2>

            <section class="xs12 sm6">
                <p>
                    For the filled text field all you need to do is use the 
                    classes <code>.text-field</code> and <code>.text-field--filled</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <div class="text-field text-field--filled">
                    <label class="text-field__label">Label</label>
                    <input type="text" class="text-field__input">
                </div>
            </section> 
        </article>

        <article class="row">
            <h2 class="xs12" id="two-line">Snackbar two line</h2>

            <section class="xs12 sm6">
                <p>
                    For the snackbar all you need to do is use a container class 
                    <code>.snackbard</code> to contain a class <code>.snackbar__content</code>
                    and or <code>.snackbar__action</code>.
                </p>

                <p>
                    To apply styling for the two line snackbar, you also need to add the class 
                    <code>.snackbar--two-line</code>.
                    If you happen to have a long action you may wish to also apply the class
                    <code>.snackbar--two-line--long-action</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <div class="snackbar snackbar--two-line">
                   <div class="snackbar__content">
                       Two line message <br> with action.
                   </div>                   
                   <div class="snackbar__actions">
                       <m-button text>
                           Actions
                       </m-button>
                   </div>
               </div>

               <div class="snackbar snackbar--two-line snackbar--two-line--long-action">
                   <div class="snackbar__content">
                       Two line message<br> with action.
                   </div>
                   <div class="snackbar__actions">
                       <m-button text>
                           A very long action
                       </m-button>
                   </div>
               </div>
            </section> 
        </article> 
    </div>    
</template>
