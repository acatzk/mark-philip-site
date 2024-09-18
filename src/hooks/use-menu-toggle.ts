import { create } from 'zustand'

type MenuToggle = {
  isOpen: boolean
  toggle: () => void
}

export const useMenuToggle = create<MenuToggle>((set, get) => ({
  isOpen: true,
  toggle: () => set({ isOpen: !get().isOpen })
}))
