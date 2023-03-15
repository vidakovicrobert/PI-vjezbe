#include <iostream>
using namespace std;

struct Osoba
{
    string ime = "";
    string prezime = "";
    int dob = -1;
    string adresa = "";
    
    void postaviOsobnePodatke(string ime, string prezime, int dob, string adresa){
	    this->ime = ime;
	    this->prezime = prezime;
	    this->dob = dob;
	    this->adresa = adresa;
    }

    void ispisiOsobnePodatke() {
	    cout << "Ime: " << this->ime << endl;
	    cout << "Prezime: " << this->prezime << endl;
	    cout << "Dob: " << this->dob << endl;
	    cout << "Adresa: " << this->adresa << endl;
    }
};

int main() {
	Osoba osoba1;
	osoba1.postaviOsobnePodatke("Jozo", "Curkovic", 50, "P14");
	osoba1.ispisiOsobnePodatke();
	
	return 0;
}
