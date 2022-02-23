import React from 'react'
import { FlatList } from 'react-native'
import { SubmitButton } from '../../../components'
import { categories } from '../../../mocked'
import styles from './styles'

const {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer
} = styles

interface Category {
  key: string
  name: string
}

interface CategoriesModalProps {
  category: Category
  setCategory: (category: Category) => void
  closeSelectCategory: () => void
}

export function CategoriesModal({
  category,
  closeSelectCategory,
  setCategory
}: CategoriesModalProps) {

  const handleCategorySelect = (category: Category) => {
    setCategory(category)
  }

  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%' }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => handleCategorySelect(item)}
            isActive={category.key === item.key}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />

      <Footer>
        <SubmitButton title='Selecionar' onPress={closeSelectCategory} />
      </Footer>
    </Container>
  )
}