<script>
    let isOpen = false;
    let selectedImage = null;

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        // 선택한 이미지를 사용자 정의 로직에 따라 처리
        
        selectedImage = file;
        console.log(selectedImage)
    }

    const openImageModal = () => {
        isOpen = true;
    }

    const closeImageModal = () => {
        selectedImage = null;
        isOpen = false;
    }
</script>

<div>
    <button on:click="{openImageModal}" class="bg-white hover:bg-gray-100 float-right text-gray-800 font-semibold m-6 py-2 px-4 border:none border-gray-400 rounded shadow">
        내 앨범
    </button>
    {#if isOpen}
        <div class="fixed inset-0 flex items-center justify-center z-50">
        <div class="overlay fixed inset-0 bg-gray-900 opacity-50"></div>
        <div class="image-modal-container bg-white w-1/2 mx-auto rounded shadow-lg z-50">
            <div class="image-modal-content py-4 px-6">
                <h2 class="text-xl mb-5">오늘의 사진 업로드</h2>
                <input type="file" accept="image/*" on:change={handleImageUpload}>
                <button class="ml-6 px-4 py-2 bg-gray-800 text-white rounded" on:click={closeImageModal}>닫기</button>
            </div>
        </div>
    </div>
    {/if}
</div>


<style>
    .image-modal-container{
        width: 50%;
        max-width: 500px;
    }
</style>