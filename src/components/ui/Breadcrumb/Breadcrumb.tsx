interface BreadcrumbItem {
  label: string
  onClick?: () => void
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <div className="text-hint text-text-muted mb-5 flex items-center gap-1.5">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5">
            {index > 0 && <span>/</span>}
            {item.onClick ? (
              <button onClick={item.onClick} className="hover:text-primary-hover transition-colors">
                {item.label}
              </button>
            ) : (
              <span className={index === items.length - 1 ? 'text-text-base font-medium' : ''}>{item.label}</span>
            )}
          </div>
        ))}
    </div>
  )
}

export default Breadcrumb
