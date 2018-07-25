<template>
    <div>
        <article class="row">
            <section class="xs12 sm6">
                <p>
                    The snackbar comes in two varieties
                    <a href="#single-line">single line</a> and <a href="#two-line">two line</a>.
                </p>
            </section>
        </article>

        <article class="row">
            <h2 class="xs12" id="single-line">Snackbar single line</h2>

            <section class="xs12 sm6">
                <p>
                    For the snackbar all you need to do is use a container class 
                    <code>.snackbard</code> to contain a class <code>.snackbar__content</code>
                    and or <code>.snackbar__action</code>.
                </p>

                <p>
                    To apply styling for the single line snackbar, you also need to add the class 
                    <code>.snackbar--single-line</code>.
                </p>
            </section>

            <section class="xs12 sm6">
                <div class="snackbar snackbar--single-line">
                   <div class="snackbar__content">
                       Single line message.
                   </div>
               </div>

               <div class="snackbar snackbar--single-line">
                   <div class="snackbar__content">
                       Single line message with action.
                   </div>
                   <div class="snackbar__actions">
                       <m-button text>
                           Actions
                       </m-button>
                   </div>
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
