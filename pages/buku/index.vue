<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <h2 class="text-center my-4">PENCARIAN BUKU</h2>
                <div class="my-3">
                    <input type="search" class="form-control rounded-5" placeholder="Masukan judul">
                </div>
                <div class="my-3 text-muted">menampilkan 3 dari 3</div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="card mb-3">
                            <div class="card-body">
                                <nuxt-link to="/buku/detail">
                                <img src="~/assets/img/cover1.jpg" class="cover" alt="cover 1">
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card mb-3">
                            <div class="card-body">
                                <img src="~/assets/img/cover2.jpg" class="cover" alt="cover 2">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card mb-3">
                            <div class="card-body">
                                <img src="~/assets/img/cover3.jpeg" class="cover" alt="cover 3">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nuxt-link to="http://localhost:3000/">
                    <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">kembali</button>
                </nuxt-link>
    </div>
</template>


<style scoped>
.cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0 30;
}
</style>

<script setup>
const supabase = useSupabaseClient()

const books = ref([])

const getBooks = async () => {
    if(data) books.value = data
}

onMounted(() => {
    getBooks()
})
</script>