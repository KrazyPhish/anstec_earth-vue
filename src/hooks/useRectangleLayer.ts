import { RectangleLayer, type Earth } from "@anstec/earth"
import { onMounted, onUnmounted, shallowRef, type ShallowRef } from "vue"

export default <T>(earthRef: ShallowRef<Earth | null>) => {
  const layerRef = shallowRef<RectangleLayer<T> | null>(null)

  onMounted(() => {
    if (!earthRef.value) return
    layerRef.value = new RectangleLayer<T>(earthRef.value)
  })

  onUnmounted(() => {
    layerRef.value?.destroy()
    layerRef.value = null
  })

  return layerRef
}
