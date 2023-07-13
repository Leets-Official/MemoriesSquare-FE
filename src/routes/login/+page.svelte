<svelte:head>
	<title>Memories Square Login</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="p-3 flex flex-col justify-between h-full">
	<p class="text-3xl text-center pt-10">Memories Square</p>
	<div class="p-6 space-y-4 lg:space-y-6 sm:p-8">
		<div class="items-center space-y-3">
			<a
				href="https://api.crazyform.co/oauth/login/google"
				class="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
			>
				<svg
					class="w-5 h-5 mr-2"
					viewBox="0 0 21 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0_13183_10121)"
						><path
							d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z"
							fill="#3F83F8"
						/><path
							d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z"
							fill="#34A853"
						/><path
							d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z"
							fill="#FBBC04"
						/><path
							d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z"
							fill="#EA4335"
						/></g
					><defs
						><clipPath id="clip0_13183_10121"
							><rect width="20" height="20" fill="white" transform="translate(0.5)" /></clipPath
						></defs
					>
				</svg>
				구글계정으로 로그인
			</a>
			<a
				href="https://api.crazyform.co/oauth/login/facebook"
				class="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="#1a77f2"
					class="w-5 h-5 mr-2"
					viewBox="0 0 16 16"
				>
					<path
						d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
					/>
				</svg>
				페이스북으로 로그인
			</a>
		</div>
		<!-- <div class="flex items-center">
			<div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
			<div class="px-5 text-center text-gray-500 dark:text-gray-400">or</div>
			<div class="w-full h-0.5 bg-gray-200 dark:bg-gray-700" />
		</div> -->
	</div>
</div>
