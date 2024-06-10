import { useRef } from "react"
import { View, Text, Animated, PanResponder, StyleSheet } from "react-native"
import { baseStyles } from "../../BaseStyles"


const ListItemNote = ({itemNote, deleteFunction}) => {

  const itemAnimated = useRef(new Animated.ValueXY()).current

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {dx: itemAnimated.x, dy: itemAnimated.y}
        ],
        {useNativeDriver: false}
      ),
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > 50) {
          console.log('se desplazo a la derecha', gesture.dx )
          deleteFunction()
        }
        Animated.spring(itemAnimated, {
          toValue: {x: 0, y: 0},
          useNativeDriver: true
        }).start()
      }
    })
  ).current

  return(
    <View>
      <Animated.View
        style={{
          transform: [{ translateX: itemAnimated.x }, { translateY: itemAnimated.y }]
        }}
        {...panResponder.panHandlers}
      >
        <Text style={styles.item}>
          {itemNote.note}
        </Text>
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    ... baseStyles.bgSecondary,
    color: baseStyles.colorPrimary.color,
    shadowColor: baseStyles.colorPrimary.color,
    fontSize: 16,
    paddingVertical: 18,
    paddingHorizontal: 15,
    marginBottom: 10,
    borderRadius: 20,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    elevation: 1,
  },
})

export default ListItemNote