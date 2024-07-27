
import Category from '@/components/icons/category'
import {BookTemplate, Home, Logs, Settings, Workflow } from 'lucide-react'


export const menuOptions = [
  { name: 'Dashboard', Component: Home, href: '/dashboard' },
  { name: 'Workflows', Component: Workflow, href: '/workflows' },
  { name: 'Settings', Component: Settings, href: '/settings' },
  { name: 'Connections', Component: Category, href: '/connections' },

  { name: 'Templates', Component: BookTemplate, href: '/templates' },
  { name: 'Logs', Component: Logs, href: '/logs' },
]



