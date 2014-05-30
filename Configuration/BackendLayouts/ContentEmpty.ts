backendlayouts {
    ContentEmpty {
        icon = EXT:themes_gridelements/Resources/Public/Icons/BackendLayouts/ContentEmpty.jpg
        name = ContentEmpty
        backend_layout (
            colCount = 1
            rowCount = 2
            rows {
                1 {
                    columns {
                        1 {
                            name = LLL:EXT:themes_gridelements/Resources/Private/Language/BackendLayouts.xlf:area_content
                            colPos = 0
                        }
                    }
                }
                2 {
                    columns {
                        1 {
                            name = LLL:EXT:themes_gridelements/Resources/Private/Language/BackendLayouts.xlf:area_unused
                            rowspan = 1
                            colPos = -2
                        }
                    }
                }
            }
        )
    }
}