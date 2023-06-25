<script>
export default {
    name: 'HeroComponent'
}
</script>

<template>
    <div class="">
        <!-- Desktop -->
        <div class="d-none d-md-block">
            <div class="row hero mt-5">
                <div class="col-md-6 col-sm-12 ">
                    <div class="d-flex h-100">
                        <div class="justify-content-center align-self-center">
                            <h1><strong>Delicious Food Menu,</strong><br> In Your Gadget</h1>
                            <p class="text-secondary fs-6">Ayo segera pilih dan pesan makanan favorit anda.</p>
                            <router-link class="btn btn-lg btn-success rounded-pill mt-4 px-4 shadow" to="/foods"><i class="bi-arrow-right"></i> Order</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="d-flex w-100 justify-content-center">
                        <img src="@/assets/img/hero.svg" alt="">
                    </div>
                </div>
            </div>
        </div>

        <!-- Mobile -->
        <div class="d-sm-block d-md-none">
            <div class="row hero mt-5">
                <div class="col-md-6 col-sm-12">
                    <div class="d-flex w-100 justify-content-center">
                        <img src="@/assets/img/hero.svg" alt="">
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 mt-4">
                    <div class="d-flex h-100">
                        <div class="justify-content-center align-self-center text-center">
                            <h1><strong>Delicious Food Menu,</strong><br> In Your Gadget</h1>
                            <p class="text-secondary fs-6">Ayo segera pilih dan pesan makanan favorit anda.</p>
                            <router-link class="btn btn-lg w-50 btn-success rounded-pill mt-4 py-3 shadow" to="/foods"><i class="bi-arrow-right"></i> Order</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>