const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white/75 z-50 flex items-center justify-center">
      <div className="w-10 h-10 border-4 border-border border-t-primary rounded-full animate-spin" />
    </div>
  )
}

export default Loading
