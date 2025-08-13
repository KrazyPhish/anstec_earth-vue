import { PolygonLayer, type Earth } from "@anstec/earth"
import { onMounted, onUnmounted, shallowRef, type ShallowRef } from "vue"

export default <T>(earthRef: ShallowRef<Earth | null>) => {
  const layerRef = shallowRef<PolygonLayer<T> | null>(null)

  onMounted(() => {
    if (!earthRef.value) return
    layerRef.value = new PolygonLayer<T>(earthRef.value)
  })

  onUnmounted(() => {
    layerRef.value?.destroy()
    layerRef.value = null
  })

  return layerRef
}
