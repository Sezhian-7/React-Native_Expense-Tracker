import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Input from './Input';
import TextInputField from './TextInputField';
import DateCalendar from './DateCalendar';
import SelectDropdownField from './SelectDropdownField';
import { Formik } from 'formik'
import ModifyButton from './ModifyButton';

interface AddFormProps {
    initialValues?: any;
    validationSchema?: any

    isIncome?: boolean;
    onSubmitForm?: any;
    onAddNewCategory?: () => any;
    onChangeAmount?: any;
    onChangeNote?: any;
    amount?: string;
    note?: string;
    categoryOption?: any[] | undefined;
    onCategorySelect?: (value: any) => any;
    selectedCategory?: string;

    month?: string;
    onDateIconClick?: () => any;
    selected?: string;
    onDayPress?: (day: any) => void;
    maxDate?: string;
    show?: boolean;
    onPressArrowRight?: () => any;
    onPressArrowLeft?: () => any;
    calendarStyle?: {};
    prevNext?: boolean;
    dateViewStyle?: {};
}

export const AddForm: React.FC<AddFormProps> = ({
    isIncome,
    onSubmitForm,
    onAddNewCategory,
    onChangeAmount,
    onChangeNote,
    amount,
    note,
    categoryOption,
    onCategorySelect,
    selectedCategory,

    month,
    onDateIconClick,
    selected,
    onDayPress,
    maxDate,
    show,
    initialValues,
    validationSchema
}) => {
    return (
        <View style={styles.formBlk}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmitForm}
            >
                {({ errors, setFieldValue, values, handleChange, setFieldTouched, touched }) => (
                    <>
                        {console.log('err', errors, touched)}


                        <DateCalendar
                            prevNext={false}
                            month={month}
                            onDateIconClick={onDateIconClick}
                            show={show}
                            maxDate={maxDate}
                            selected={selected}
                            onDayPress={onDayPress}
                        />


                        <Input
                            id='amount'
                            label='Enter the amount'
                            placeholderText='Enter amount'
                            value={values.name}
                            onChange={(value: any) => {
                                onChangeAmount(value);
                            }}
                            error={errors.amount}
                            touched={touched.amount}
                        />


                        <SelectDropdownField
                            label='Choose category'
                            selectedvalue={selectedCategory}
                            options={categoryOption}
                            onSelect={(value: any) => {
                                onCategorySelect ? onCategorySelect(value) : null;
                                setFieldValue("category", value);
                            }}
                            addSelectContainerStyle={{ marginBottom: 0 }}
                            error={errors.category}
                            touched={touched.category}

                        />


                        <TouchableOpacity onPress={onAddNewCategory}>
                            <View style={styles.addCat}>
                                <TextInputField addStyle={styles.categoryBtn} content='Add new category' />
                                <Icon name="plus" size={20} color="#08979D" />
                            </View>
                        </TouchableOpacity>


                        <Input
                            label='Note'
                            placeholderText='Add your notes here...'
                            value={note}
                            onChange={onChangeNote}
                            isMultiline={true}
                            noOfLines={4}
                        />
                        <ModifyButton
                            text={`Add ${isIncome ? 'income' : 'Expenses'}`}
                            onClick={onSubmitForm} />

                    </>
                )}
            </Formik>
        </View>
    );
}

const styles = StyleSheet.create({
    formBlk: {
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 20,
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 3,
    },
    addCat: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        columnGap: 5
    },
    categoryBtn: {
        color: '#08979D',
        fontSize: 18,
        textAlign: 'right',
        marginVertical: 10,
    },
    addBtn: {
        backgroundColor: '#08979D',
        padding: 20,
        textAlign: 'center',
        borderRadius: 50,
        fontSize: 18,
    }
});

export default AddForm