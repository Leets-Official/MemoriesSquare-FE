<script>
  let isOpen = false;
  let selectedImage = null;

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // 선택한 이미지를 사용자 정의 로직에 따라 처리

    selectedImage = file;
    console.log(selectedImage);
  };

  const openImageModal = () => {
    isOpen = true;
  };

  const closeImageModal = () => {
    selectedImage = null;
    isOpen = false;
  };

  const request = async (data) => {
    try {
      const res = await fetch(`${import.meta.env.VITE_SERVER_URL}/photo/upload`, {
        method: 'POST',
        body: data
      });

      if (res.ok) return await res.json();
      throw new Error('Image Upload failed.');
    } catch (e) {
      console.error(e);
    }
  };

  const confirmUpload = () => {
    if (selectedImage) {
      const formData = new FormData();
      formData.append('file', selectedImage);

      const imsy = request(formData);
      console.log(imsy);
    }
  };
</script>

<div class="flex justify-center w-full max-w-lg fixed bottom-5">
  <button
    on:click={openImageModal}
    class="px-5 py-2 mx-auto fixed-btn text-white rounded-full font-medium text-base shadow"
    ><i class="fa-solid fa-image mr-2.5" />오늘의 사진 올리기</button
  >
  {#if isOpen}
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="overlay fixed inset-0 bg-gray-900 opacity-50" />
      <div class="image-modal-container bg-white rounded shadow-lg z-50 w-full max-w-lg mx-6">
        <div class="image-modal-content p-6">
          <h2 class="text-xl mb-4">오늘의 사진 업로드</h2>

          <div class="flex items-center justify-center w-full">
            <label
              for="dropzone-file"
              class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">클릭 또는 드래그하여</span> 사진을 업로드하세요.
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                accept="image/*"
                class="hidden"
                on:change={handleImageUpload}
              />
            </label>
          </div>

          <div class="grid grid-cols-2 w-full gap-2 mt-5">
            <button class="px-4 py-2 bg-gray-500 text-white rounded" on:click={closeImageModal}
              >취소</button
            >
            <button class="px-4 py-2 bg-blue-500 text-white rounded" on:click={confirmUpload}
              >확인</button
            >
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .fixed-btn {
    background: #3b82f6;
    background: linear-gradient(135deg, #3b82f6, #2563eb);
  }
</style>
