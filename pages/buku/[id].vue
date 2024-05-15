<template>
  <div class="container shadow p-2 mt-3">
      <div class="row mt-4">
          <div class="col-4">
                  <img src="assets/img/cover1.jpg" class="cover" alt="cover 1" height="340px" width="340px">
              </div>

          <div class="col-4">

<p>Informasi lain :</p>

<p>Judul : Future skills</p>
<p>Tanggal Terbit : 1 februari 2023</p>
<p>Rak : Ada di rak no 1 bagian atas</p>
</div>
</div>
      <div class="row">
          <p class="mt-5">Seperti apa umat manusia 20 tahun mendatang atau 50 tahun mendatang? Keterampilan apa yang harus kita kembangkan pada zaman kemajuan teknologi yang tiada henti ini?
Saintis, penemu, dan futuris Finlandia Perttu Pölönen berpendapat bahwa tahap revolusi berikutnya adalah revolusi manusia. Untuk mengimbangi dunia yang serba digital, kita perlu mengembangkan kreativitas, ketekunan, kasih sayang, dan rasa ingin tahu—keterampilan lunak yang memberi makna pada hidup dan membedakan kita dengan mesin.
Dipenuhi dengan kisah-kisah yang menginspirasi dan contoh-contoh yang menggugah pikiran, buku ini berisi sebuah kurikulum masa depan. Sebuah panduan yang akan memberdayakan Anda untuk menggunakan kemampuan unik Anda agar dapat menguasai masa depan yang penuh ketidakpastian.</p>
      </div>
      <nuxt-link to="http://localhost:3000/buku">
                  <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">kembali</button>
              </nuxt-link>
      </div>

      <h2 class="text-start my-4"> {{ buku,judul }} </h2>
      <div class="row">
          <div class="col-md-3">
              <img src="buku.cover" class="cover" alt="cover buku">
          </div>
          <div class="col-md-6">
               <div class="badge bg-primary p-2">{{ buku.kategori }}</div>
              <ul class="list-group list-group-flush">
                  <li class="list-group-item">Penulis: {{ buku.Penulis }}</li>
                  <li class="list-group-item">Penerbit: {{ buku.penerbit }}</li>
                  <li class="list-group-item">{{ buku.deskripsi }}</li>
              </ul>
          </div>
      </div>
</template>
<style scoped>
</style>

<script setup>
const supabase = useSupabaseClient()
const route = useRoute()
const buku = ref([])

const getBookById = async () => {
  const { data, error } = await supabase.from('buku').select(',kategori()')
  .eq('id', route.params.id)
  if(data) buku.value = data[0]
}

onMounted(() => {
  getBookById()
})

</script>