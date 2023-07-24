import * as React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import FAB from 'react-native-animated-fab';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            atque ab omnis voluptatum dicta perspiciatis error provident
            consectetur dolor quod, recusandae, quam quaerat natus, laudantium
            quos est vel pariatur nobis.
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quia
            quibusdam officiis voluptas harum deleniti. Dolore deserunt placeat
            enim nihil modi reprehenderit illo ullam recusandae odio in
            assumenda ea perferendis, numquam molestias officiis eveniet atque?
            Assumenda quam blanditiis accusamus reprehenderit. Vel, temporibus
            vitae. Ipsa dolore ad est laborum accusantium ullam aspernatur,
            assumenda cupiditate magni, tenetur dolor rerum ea earum facere
            obcaecati suscipit voluptatem enim sit. Natus quasi tempore nihil
            quia, error reiciendis modi aliquam quo eligendi aliquid, quisquam,
            facilis explicabo sequi quis rem necessitatibus cumque eveniet
            delectus at. Necessitatibus, dolor. Eveniet quia, sed omnis nam sint
            atque! Nemo, maiores mollitia?
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            perferendis voluptatibus eveniet fugit quos tenetur ex animi
            corrupti, nihil minus impedit distinctio perspiciatis iure porro
            vitae. Molestias fuga delectus nesciunt natus itaque iusto
            voluptatem veritatis error officia perspiciatis sed non nulla
            voluptatibus adipisci alias dicta molestiae hic excepturi doloribus
            corporis, aperiam temporibus pariatur voluptates. Itaque dicta
            voluptatibus ea earum est magni nesciunt! Vel, neque placeat
            voluptates cum optio ratione repellendus et harum facere modi! Porro
            voluptates voluptatum molestias illum perspiciatis laboriosam
            dolorem quisquam distinctio vel repellat eius tempore velit neque
            libero nostrum provident non consequatur illo vitae, iusto ipsa
            dolores! Nesciunt ducimus laborum consequatur quas iusto debitis hic
            id sapiente officia commodi molestiae, similique a vel modi voluptas
            praesentium, nostrum sed, cum rerum quae quia atque rem!
            Voluptatibus iusto ipsum voluptatum, inventore reiciendis ducimus
            libero culpa, hic tempore minima numquam, velit aliquam illum odio.
            Dolorem, laborum accusantium officia inventore, nam tenetur, quas
            magni delectus praesentium quam et. Sapiente, consectetur temporibus
            cupiditate error impedit corrupti veniam assumenda optio hic
            asperiores qui omnis amet sint perferendis dolorum necessitatibus,
            natus exercitationem perspiciatis mollitia ullam. Autem illo
            accusamus quis rerum blanditiis consectetur aliquid asperiores
            eveniet porro, dolorem, aut optio velit praesentium, aliquam eum.
            Quo odit dicta perspiciatis cupiditate iusto magnam tempora ratione
            sapiente blanditiis inventore voluptatem consequuntur harum beatae
            eveniet quia nihil a explicabo est nobis error, fuga, officia
            adipisci optio. Alias hic ratione incidunt repellendus natus qui
            sequi modi unde porro possimus delectus suscipit soluta obcaecati
            rerum odio optio doloremque nesciunt vel, culpa consequuntur
            aspernatur adipisci corporis atque velit! Nostrum excepturi, neque
            reiciendis quod nam tenetur magni voluptates impedit aliquid, sequi
            optio aliquam. Impedit laboriosam placeat earum quae, ab laborum,
            consequuntur eligendi unde est maxime, modi odio sint deleniti
            aliquid cumque asperiores distinctio! Repudiandae, dolor! Eveniet
            aperiam iste ipsum, magni nostrum facere harum!
          </Text>
        </View>
      </ScrollView>
      <FAB
        renderSize={60}
        borderRadius={30}
        icon={require('./avatar.png')}
        iconSize={60}
        onPress={() => Alert.alert('FAB pressed !')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 50,
  },
  section: {
    marginBottom: 16,
  },
});
