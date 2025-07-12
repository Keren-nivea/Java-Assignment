import javax.swing.JOptionPane;
public class dialogbox {
    public static void main(String[] args) {
        String name=JOptionPane.showInputDialog("Enter your name");
        JOptionPane.showMessageDialog(null,"hello I am "+name);

        int age=Integer.parseInt(JOptionPane.showInputDialog( "Enter your age"));
        JOptionPane.showMessageDialog(null,"I am "+age+" years old");

        double height=Double.parseDouble(JOptionPane.showInputDialog("Enter your Height"));
        JOptionPane.showMessageDialog(null,"My height is "+height+"m");
    }
}
 
