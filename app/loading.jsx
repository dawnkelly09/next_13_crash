/*next is automatically looking for a page called loading.js/jsx, etc 
to use on any server component within the app. No need to setState or use isLoading, etc. Just set it up here and it will work! 

'use client' makes this not work*/

const LoadingPage = () => {
  return (
    <div className="loader">
        <div className="spinner"></div>
    </div>
  )
}

export default LoadingPage