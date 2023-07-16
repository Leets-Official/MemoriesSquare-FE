<script>
    import {setContext} from "svelte"
    const request = async(data) => {
        try {
            const res = await fetch("https://api.crazyform.co/photo/upload", {
                method: "POST",
                body: data
            })

            if (res.ok) return await res.json();
            throw new Error("Image Upload failed.")
        } catch (e) {
            console.error(e);
        }
    }
    setContext("api-fetch",request());
</script>