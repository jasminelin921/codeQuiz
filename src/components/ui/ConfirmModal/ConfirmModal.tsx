interface ConfirmModalProps {
  title: string
  description: string
  confirmLabel?: string
  onConfirm: () => void
  onCancel: () => void
}

const ConfirmModal = ({
  title,
  description,
  confirmLabel = '確認',
  onConfirm,
  onCancel
}: ConfirmModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-card-bg mx-4 w-full max-w-md rounded-2xl px-7 py-6 shadow-lg">
        <h2 className="text-title text-text-base mb-2 font-medium">{title}</h2>
        <p className="text-label text-text-muted mb-4 leading-relaxed">{description}</p>

        <div className="flex justify-end gap-2">
          <button
            onClick={onCancel}
            className="border-border text-button text-text-muted hover:border-text-muted h-9 rounded-lg border px-5 transition-colors"
          >
            取消
          </button>
          <button
            onClick={onConfirm}
            className="bg-primary text-button hover:bg-primary-hover h-9 rounded-lg px-5 font-medium text-white transition-colors"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConfirmModal
